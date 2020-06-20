import MaterialTable from "material-table";

function BasicFiltering() {
  return (
    <MaterialTable
      title='Basic Filtering Preview'
      columns={[
        { title: "Name", field: "name" },
        { title: "Type", field: "type" },
        { title: "Birth Year", field: "birthYear", type: "numeric" },
        // {
        //   title: "Birth Place",
        //   field: "birthCity",
        //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
        // },
      ]}
      data={[
        { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        {
          name: "Zerya Betül",
          surname: "Baran",
          birthYear: 2017,
          birthCity: 34,
        },
      ]}
      options={{
        filtering: true,
      }}
    />
  );
}

export default BasicFiltering;