import React from 'react'

export function InputAmount() {
  const [amount, setAmount] = React.useState('');

  let handleChange = (event) => {
    setAmount(event.target.value)
  }

  return (
    <div style={{
      display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	    justifyContent: 'center',
      marginBottom: '35px'
    }}>
	    <div className="container__item">
		    <form className="form">
		    	<input type="text" className="form__field" name="amount" placeholder="1000" value={amount} onChange={handleChange} />
		    	<button type="button" className="btn btn--primary btn--inside uppercase">Unlock DAI</button>
		    </form>
	    </div>
    </div>
  )
}
