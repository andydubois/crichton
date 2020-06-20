import MaterialTable from "material-table";

function BasicFiltering() {
  return (
    <MaterialTable
      title='Jurassic World Dinosaur Filter'
      columns={[
        { title: "Name", field: "name" },
        { title: "Type", field: "type" },
        { title: "Base Rating", field: "base_Rating", type: "numeric" },
        // {
        //   title: "Birth Place",
        //   field: "birthCity",
        //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
        // },
      ]}
      data={[
        { name: props.name, type: props.type, birthYear: 1987, birthCity: 63 },
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