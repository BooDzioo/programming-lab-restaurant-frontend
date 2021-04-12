import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getAllUsers,
  deleteUser,
  clearGetAllUsersErrorMessage,
} from '../../../../store/panel/actions';
import ErrorMessage from '../../../../components/ErrorMessage';
import './styles.css';
import styles from '../../styles';

const ListOfUsers = (props) => {
  useEffect(() => {
    if (!props.deleteUserPending) {
      props.getAllUsers();
    }
  }, [props.deleteUserPending]);

  const showErrorMessage = () => {
    return (
      props.getAllUsersErrorMessage && <ErrorMessage message={props.getAllUsersErrorMessage} />
    );
  };

  const handleDeleteClick = (id) => {
    props.clearGetAllUsersErrorMessage();
    props.deleteUser(id);
  };

  const showTable = () => {
    if (props.usersList.length) {
      const keys = Object.keys(props.usersList[0]);
      const headers = (
        <tr>
          {keys.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
          <th>delete</th>
        </tr>
      );
      const content = props.usersList.map((user, index) => {
        return (
          <tr key={index}>
            {keys.map((item, index) => {
              return <td key={index}>{user[item]}</td>;
            })}
            <td>
              <button onClick={() => handleDeleteClick(user.user_id)}>delete</button>
            </td>
          </tr>
        );
      });
      return (
        <table>
          {headers}
          {content}
        </table>
      );
    }
  };

  return (
    <>
      <h1 style={styles.title}>LIST OF USERS</h1>
      {showErrorMessage()}
      {showTable()}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usersList: state.panel.usersList,
    getAllUsersErrorMessage: state.panel.getAllUsersErrorMessage,
    deleteUserPending: state.panel.deleteUserPending,
    deleteUserErrorMessage: state.panel.deleteUserErrorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllUsers,
      deleteUser,
      clearGetAllUsersErrorMessage,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);
