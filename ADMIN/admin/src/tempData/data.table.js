export const userColumns = [
    {
        field:"_id",
        headerName:"_id",
        width:170
    },
    {
        field:"username",
        headerName:"User",
        width:230,
        // renderCell:(params)=>{
        //     return (
        //         <div>
        //             <img src={params.userRows.img} alt="image"/>
        //             <span>{params.userRows.username}</span>
        //         </div>
        //     )
        // }
    },
    {
        field:"email",
        fieldName:"Email",
        width:200,
    },
    {
        field:"phone",
        fieldName:"Phone",
        width:120
    },
    {
        field:"country",
        fieldName:"Country",
        width:160
    }
]


export const hotelColumns = [
  {
    field:"_id",
    headerName:"ID",
    width:120
  },
  {
    field:"title",
    headerName:"Title",
    width:120
  },
  {
    field:"type",
    headerName:"Type",
    width:120
  },
  {
    field:"name",
    headerName:"Name",
    width:120
  },
  {
    field:"city",
    headerName:"City",
    width:120
  },
  {
    field:"description",
    headerName:"Description",
    width:160
  },
]

export const roomColumns = [
  {
    field:"_id",
    headerName:"ID",
    width:120
  },
  {
    field:"title",
    headerName:"Title",
    width:120
  },
  {
    field:"type",
    headerName:"Type",
    width:120
  },
  {
    field:"name",
    headerName:"Name",
    width:120
  },
  {
    field:"city",
    headerName:"City",
    width:120
  },
  {
    field:"description",
    headerName:"Description",
    width:160
  },
]