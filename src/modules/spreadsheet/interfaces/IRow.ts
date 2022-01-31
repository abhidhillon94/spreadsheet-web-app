export default interface IRow {
    _id: string;
    order: number;
    cells: {
        [column: string]: {value: string}
    };
}
