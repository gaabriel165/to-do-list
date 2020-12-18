import React, { Component } from 'react';
import api from '../../services/services';

function deleteTask(id){
    api.delete(`http://localhost:3001/${id}`);
    window.location.reload();
}

export default deleteTask;