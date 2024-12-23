interface TableProps {
  tableName: string;
}

export default function TableComponent({ tableName }: TableProps) {
  return (
    <div>
      <div>This is table component {tableName}</div>
    </div>
  );
}
