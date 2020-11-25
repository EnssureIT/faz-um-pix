import { crcTable } from "./crcTable";
const qrcode = require("yaqrcode");

/**
 *
 * @param {string} merchant_account
 * @param {string} merchant_name
 * @param {string} merchant_city
 * @param {number} transaction_amount
 * @param {string} info_adic
 * @param {boolean} return_qrcode
 */
export async function Pix(
  merchant_account: string,
  merchant_name: string,
  merchant_city: string,
  transaction_amount: number,
  info_adic: string,
  return_qrcode: boolean = false
): Promise<string> {
  const format = "000201"; // Payload Format Indicator
  const gui = "0014br.gov.bcb.pix"; // GUI
  const chave =
    "01" +
    (merchant_account.length < 10
      ? "0" + merchant_account.length
      : merchant_account.length) +
    merchant_account; // Key Pix
  const info =
    info_adic.length > 0
      ? "02" +
        (info_adic.length < 10 ? "0" + info_adic.length : info_adic.length) +
        (info_adic.length > 50 ? info_adic.substring(0, 50) : info_adic)
      : ""; // Additional Info
  const account =
    "26" + (gui.length + chave.length + info.length) + gui + chave + info; // Merchant Account Information
  const category = "52040000"; // Merchant Category Code
  const currency = "5303986"; // Transaction Currency (R$)
  const amount =
    `${transaction_amount}`.length > 0
      ? "54" +
        (`${transaction_amount}`.length < 10
          ? "0" + `${transaction_amount}`.length
          : `${transaction_amount}`.length) +
        transaction_amount
      : ""; // Transaction Amount
  const country = "5802BR"; // Country Code
  let name =
    merchant_name.length > 25 ? merchant_name.substring(0, 25) : merchant_name;
  name = "59" + (name.length < 10 ? "0" + name.length : name.length) + name; // Merchant Name
  let city =
    merchant_city.length > 25 ? merchant_city.substring(0, 25) : merchant_city;
  city = "60" + (city.length < 10 ? "0" + city.length : city.length) + city; // Merchant City
  const additional = "62070503***"; // Additional Data Field Template
  const crc16 = "6304"; // CRC16

  const payload =
    format +
    account +
    category +
    currency +
    amount +
    country +
    name +
    city +
    additional +
    crc16;

  let crc = 0xffff;
  let j, i;
  for (i = 0; i < payload.length; i++) {
    const c = payload.charCodeAt(i);
    if (c > 255) throw new RangeError();
    j = (c ^ (crc >> 8)) & 0xff;
    crc = crcTable[j] ^ (crc << 8);
  }
  const crcCalc = ((crc ^ 0) & 0xffff).toString(16).toUpperCase();
  let qrCodePix =
    payload +
    (crcCalc.length == 4
      ? ""
      : crcCalc.length == 3
      ? "0"
      : crcCalc.length == 2
      ? "00"
      : "000") +
    crcCalc;

  if (return_qrcode) {
    qrCodePix = await generateQrCode(qrCodePix);
  }

  return qrCodePix;
}

/**
 *
 * @param {string} payload
 */
async function generateQrCode(payload: string): Promise<string> {
  return qrcode(payload, {
    size: 400
  });
}
