import {useEffect} from 'react';



const Header = ({
  getData
}) => {
  

  return (
    <>
      <header class="header">
        <button onClick={()=>{getData()}}>Получить данные</button>
        <div>
          <span>Общий бюджет</span>
          <input type="text" />
        </div>
      </header>
    </>
  );
};
export default Header;
