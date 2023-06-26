/*
 * Review Model Class
 *  - based on sample code distrubuted at Rob Frenette's section
 *
 */
export class Review {
  // properties
  public _id?: string;
  public region: string;
  public producer: string;
  public year: string;
  public notes: string;

  constructor(
    _id: string,
    region: string,
    producer: string,
    year: string,
    notes: string
  ) {
    this._id = _id;
    this.region = region;
    this.producer = producer;
    this.year = year;
    this.notes = notes;
  }
}
