
import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/modal.js';
import Popup from "reactjs-popup";
import $ from "jquery";
const App = () => {
  const usersData = [
  ]

  const [ users, setUsers ] = useState(usersData)
  const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
    
	}
	$(function() {
		$('a[data-confirm]').click(function(ev) {
			var href = $(this).attr('href');
			
			if (!$('#dataConfirmModal').length) {
				$('body').append('<div id="dataConfirmModal" class="modal" role="dialog" aria-labelledby="dataConfirmLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3 id="dataConfirmLabel" style="text-align:center">Confimer la suppression ?</h3></div><div class="modal-body"></div><div class="modal-footer"><a class="btn btn-danger" id="dataConfirmOK" onclick="">Oui</a><button class="btn" data-dismiss="modal" aria-hidden="true">Non</button></div></div></div></div>');
				
			}
			$('#dataConfirmModal').find('.tt').text($(this).attr('data-confirm'));
			$('#dataConfirmOK').attr('href', href);
			$('#dataConfirmModal').modal({show:true});
			
				
			return false;
		});
	});

	return (
		<div className="container">
			<div className="flex-row">
				<div className="flex-large">
          <AddUserForm addUser={addUser} />
					<pop1 />
				</div>
				<div className="flex-large">
          <UserTable users={users} deleteUser={deleteUser}/>
		  
				</div>
			</div>
		</div>
	)
}
const UserTable = props => (
 
	<table className="table">
    <thead className="thead-dark">
      <tr>
        <th className="lit" scope="col">id</th>
        <th scope="col">Nom</th>
        <th scope="col">Prenom</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.users.length >= 0 ? (
				props.users.map(user => (
					<tr key={user.id}className="tt" >
          <td scope="col">{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>
							<a href="" data-confirm=" "><button className="btn btn-danger">X</button></a>
								
    
						</td>
					</tr>
				))
			) : (
				<tr>
				</tr>
			)}
    </tbody>
  </table>
)
const AddUserForm = props => {
  const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}
	return (
		<form onSubmit={event => {
      event.preventDefault()
      if (!user.name || !user.username) return

      props.addUser(user)
      setUser(initialFormState)
    }}>
			<label id="buton">Nom</label>
			<input id="buton" type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label id="buton">Prenom</label>
			<input id="buton" type="text" name="username" value={user.username} onChange={handleInputChange}  />
			<button class="btn btn-success" id="buton">Ajouter</button>
		</form>
	)
}

	
  export default App;

