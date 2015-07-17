


export declare class BigInteger {


  static ZERO: BigInteger;
  static ONE: BigInteger;

  constructor(a: string|number, b?: number, c?: number);

  toString(base?:number): string;
  negate():BigInteger;
  abs():BigInteger;
  compareTo(a:BigInteger):number;
  bitLength():number;
  mod(a:BigInteger):BigInteger;
  modPowInt(e:number, m:BigInteger):BigInteger;
  clone():BigInteger;
  intValue():number;
  byteValue():number;
  shortValue():number;
  signum():number;
  toByteArray():number[];
  equals(a:BigInteger):boolean;
  min(a:BigInteger):BigInteger;
  max(a:BigInteger):BigInteger;
  and(a:BigInteger): BigInteger;
  or(a:BigInteger):BigInteger;
  xor(a:BigInteger):BigInteger;
  andNot(a:BigInteger):BigInteger;
  not():BigInteger;
  shiftLeft():BigInteger;
  shiftRight():BigInteger;
  getLowestSetBit():number;
  bitCount():number;
  testBit():number;
  setBit(n:number):BigInteger;
  clearBit(n:number):BigInteger;
  flipBit(n:number):BigInteger;
  and(a:BigInteger):BigInteger;
  add(a:BigInteger):BigInteger;
  subtract(a:BigInteger):BigInteger;
  multiply(a:BigInteger):BigInteger;
  divide(a:BigInteger):BigInteger;
  remainder(a:BigInteger):BigInteger;
  divideAndRemainder(a:BigInteger):BigInteger[];
  modPow(e:BigInteger, m:BigInteger):BigInteger;
  pow(e:number):BigInteger;
  gcd(a:BigInteger):BigInteger;
  isProbablePrime(t:number):boolean;

  /**
   * Get the byte value of this Big Integer
   */
  getBytes(): Uint8Array;

  /**
   * this^2
   */
  square():BigInteger;
}