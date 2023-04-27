import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.97;

  return (
    <div className='expense-item'>
      <div className=''>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2 className=''>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
