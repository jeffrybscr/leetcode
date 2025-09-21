class RowStructure {
  private zigZagOffset: number;
  private displacement: number;
  private matrix: string[][];
  private currentRow = 0;
  private increase = 1;

  constructor(private numRows: number) {
    this.zigZagOffset = numRows - 2 >= 0 ? numRows - 2 : 0;
    this.displacement = numRows + this.zigZagOffset;
    this.matrix = Array.from({ length: numRows }, () => []);
  }

  processSequence(v: string): void {
    if (this.currentRow === 0) {
      this.increase = 1;
    } else if (this.currentRow === this.numRows - 1) {
      this.increase = -1;
    }

    this.matrix[this.currentRow].push(v);
    this.currentRow = this.currentRow + this.increase;
  }

  getSequence(): string {
    return this.matrix.map((x) => x.join("")).join("");
  }
}

export function convert(s: string, numRows: number): string {
  if (s.length === 0 || s.length > 1000 || numRows ===0 || numRows > 1000) {
    return s;
  }

  if(numRows === 1){
    return s;
  }

  const rowStructure = new RowStructure(numRows);
  for (let i = 0; i < s.length; i++) {
    rowStructure.processSequence(s[i]);
  }

  return rowStructure.getSequence();
}
