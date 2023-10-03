const Table = ({data}) => {
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <td>Id кампании</td>
          <td>Название кампании</td>
        </tr>
      </thead>
      <tbody>
        {data
          ? data.map((campaign) => {
              return (
                <tr>
                  <td>{campaign.Id}</td>
                  <td>{campaign.Name}</td>
                </tr>
              );
            })
          : false}
      </tbody>
    </table>
  );
};
export default Table;
