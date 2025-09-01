/**
 * todo1 : take a price from user (product actual price)
 * todo2 :  add vat with Actual price (20+4)----->24
 * todo3 : gave discount with  priceWithVat -----(24-5) -------->19
 * todo4 : display the actual price , vatPrice , discountPrice
 * @param ( a, b)
 */

const actualPrice = +prompt("Enter the actual price");

// vatAdder function implement
const vatAdder = (actualPrice = 0, vat = 7) => {
  const vatWithPrice = actualPrice + (actualPrice * vat) / 100;
  const vatDetails = [vatWithPrice, vat];
  return vatDetails;
};

//make discount function implement
const discountMaker = (vatWithPrice, discountRate = 10) => {
  const discountPrice = vatWithPrice - (vatWithPrice * discountRate) / 100;
  const discountDetails = [discountPrice, discountRate];
  return discountDetails;
};

// make a display function
const display = (
  pactualPrice,
  pVatWithPrice,
  pVat,
  pDiscountPrice,
  pDiscountRate
) => {
  console.log(`
        ------------------------------ Invoice ------------------------------
        Actual Price   :  ${pactualPrice} Tk
                 VAT   :  ${pVat} %

        ---------------------------------------------------------------------
        VAT Price      :  ${pVatWithPrice} Tk

        ---------------------------------------------------------------------
        Discount Rate  :  ${pDiscountRate} %
        ---------------------------------------------------------------------
        Discount Price :  ${Math.round(pDiscountPrice)} Tk
        `);
};

const RecivedvatDetails = vatAdder(actualPrice, 7);
const RecivedDiscountDetails = discountMaker(RecivedvatDetails[0], 10);
display(
  actualPrice,
  RecivedvatDetails[0],
  RecivedvatDetails[1],
  RecivedDiscountDetails[0],
  RecivedDiscountDetails[1]
);






