import React from 'react'

function Admin() {
  return (
    <div id='admin'>
        <div className="container">
            <div className="admin">
            <h1>Admin</h1>
            <div className="inputs">
                <input type="text" placeholder='imgCake' />
                <input type="text" placeholder='nameCake' />
                <input type="text" placeholder='priceCake' />
            </div>
            <button>create cake</button>
            </div>
        </div>
      
    </div>
  )
}

export default Admin
