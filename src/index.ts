import { crcTable } from './crcTable';
import * as qrcode from 'qrcode';

/**
 *
 * @param {string} merchant_account
 * @param {string} merchant_name
 * @param {string} merchant_city
 * @param {number} transaction_amount
 * @param {string} info_adic
 * @param {boolean} return_qrcode
 */
export async function Pix(merchant_account:string, merchant_name:string, merchant_city:string, transaction_amount:number, info_adic:string, return_qrcode:boolean = false): Promise<string> {

  let format = "000201"; //Payload Format Indicator
  let gui = "0014br.gov.bcb.pix"; //GUI
  let chave = "01" + (merchant_account.length < 10 ? "0" + merchant_account.length : merchant_account.length) + merchant_account; //Key Pix
  let info = (info_adic.length > 0) ? ("02" + (info_adic.length < 10 ? "0" + info_adic.length : info_adic.length) + ((info_adic.length > 50) ? info_adic.substring(0, 50) : info_adic)) : ""; //Additional Info
  let account = "26" + (gui.length + chave.length + info.length) + gui + chave + info; //Merchant Account Information
  let category = "52040000"; //Merchant Category Code
  let currency = "5303986"; //Transaction Currency (R$)
  let amount = (`${transaction_amount}`.length > 0) ? ("54" + (`${transaction_amount}`.length < 10 ? "0" + `${transaction_amount}`.length : `${transaction_amount}`.length) + transaction_amount) : ""; //Transaction Amount
  let country = "5802BR"; //Country Code
  let name = (merchant_name.length > 25) ? merchant_name.substring(0, 25) : merchant_name;
  name = "59" + (name.length < 10 ? "0" + name.length : name.length) + name; //Merchant Name
  let city = (merchant_city.length > 25) ? merchant_city.substring(0, 25) : merchant_city;
  city = "60" + (city.length < 10 ? "0" + city.length : city.length) + city; //Merchant City
  let additional = "62070503***"; // Additional Data Field Template
  let crc16 = "6304"; //CRC16

  let payload = format + account + category + currency + amount + country + name + city + additional + crc16;

  var crc = 0xFFFF;
  var j, i;
  for (i = 0; i < payload.length; i++) {
      let c = payload.charCodeAt(i);
      if (c > 255) throw new RangeError();
      j = (c ^ (crc >> 8)) & 0xFF;
      crc = crcTable[j] ^ (crc << 8);
  }
  let crcCalc = ((crc ^ 0) & 0xFFFF).toString(16).toUpperCase();
  let qrCodePix = payload + (crcCalc.length == 4 ? "" : (crcCalc.length == 3 ? "0" : (crcCalc.length == 2 ? "00" : "000"))) + crcCalc;

  if (return_qrcode) {
    qrCodePix = await generateQrCode(qrCodePix);
  }

  return qrCodePix;
}


async function generateQrCode(payload:string): Promise<string> {
  return qrcode.toDataURL(payload);
}
