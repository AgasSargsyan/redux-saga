import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from './asyncActions/customers';
import { asyncAddCashAction } from './store/cashReducer';
import { featchSetUsers } from './store/userStore';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  const users = useSelector(state => state.user.users)
  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch({type: 'ADD_CUSTOMER', payload: customer})
  }
 
  const removeCustomer = (customer) => {
    dispatch({type: 'REMOVE_CUSTOMERS', payload: customer.id})
  }

  return (
    <div className="App">
      <div style={{display: "flex"}}>
        <div>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Поплнить счет</button>
        <button onClick={() => dispatch(asyncAddCashAction())}>Поплнить счет +5</button>
        <button onClick={() => dispatch(featchSetUsers())}>Поплнить всех клиентов</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>  
        <button onClick={() => addCustomer(prompt())}>Добовть клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>  
      </div> 
      {customers.length > 0 ?(
        <div>
          {customers.map(customer => 
            <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>
          )}
        </div>
      ) : (
        <div>
          Клиенты отсуствуют!
        </div>
      )}
       {users.length > 0 ?(
        <div>
          {users.map(user => 
            <div onClick={() => removeCustomer(user)} key={user.id}>{user.name}</div>
          )}
        </div>
      ) : (
        <div>
          Клиенты отсуствуют!
        </div>
      )}
    </div>
  );
}

export default App;
