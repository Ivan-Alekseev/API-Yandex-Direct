import './App.module.css';
import {Fn} from '../../API/api';
import {useEffect, useState} from 'react';
import { fnGetAllCampaigns, objTypeCampaigns  } from '../../API/getCampaigns';
import { fnUpdateCampaign } from '../../API/updateCampaigns';

const App = () => {
  const [data, setData] = useState('');

  const getData = () => {
    Fn.createRequestCampaigns(fnGetAllCampaigns({}), setData);
  };

  // const updateData = () => {
  //   Fn.createRequestCampaigns(fnUpdateCampaign({
  //     campaigns:[
  //       {
  //         Id:10,
  //         Name:"asd"
  //       }
  //     ]
  //   }), console.log);
  // };
 
  return (
    <div className="App">
      <header class="header">
        <button onClick={() => {getData()}}>
          Получить данные
        </button>
        {/* <button onClick={() => {updateData()}}>
          Обновить данные
        </button> */}


        <div>
          <span>Общий бюджет</span>
          <input type="text" />
        </div>
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <td>Id кампании</td>
              <td>Название кампании</td>
              <td>Тип кампании</td>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((campaign) => {
                  return (
                    <tr key={campaign.Id}>
                      <td>{campaign.Id}</td>
                      <td>{campaign.Name}</td>
                      <td>{campaign.Type}</td>
                    </tr>
                  );
                })
              : false}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
