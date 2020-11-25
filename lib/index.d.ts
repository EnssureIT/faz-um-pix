/**
 *
 * @param {string} merchant_account
 * @param {string} merchant_name
 * @param {string} merchant_city
 * @param {number} transaction_amount
 * @param {string} info_adic
 * @param {boolean} return_qrcode
 */
export declare function Pix(
  merchant_account: string,
  merchant_name: string,
  merchant_city: string,
  transaction_amount: number,
  info_adic: string,
  return_qrcode?: boolean
): Promise<string>;
