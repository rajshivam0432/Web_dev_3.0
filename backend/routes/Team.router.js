import express from 'express';
import { getAllTeams, getTeamById, createTeam, updateTeam, deleteMember, deleteTeam } from '../controllers/Team.controller.js';
import { verifyJwt } from '../middlewares/auth.middlewares.js';

const teamRouter = express.Router();

teamRouter.get('/', verifyJwt, getAllTeams);
teamRouter.get('/:teamId', verifyJwt, getTeamById);
teamRouter.post('/', verifyJwt, createTeam);
teamRouter.put('/:teamId/', verifyJwt, updateTeam);
teamRouter.delete('/:teamId/delete_member', verifyJwt, deleteMember);
teamRouter.delete('/delete_team/:teamId', verifyJwt, deleteTeam);



export default teamRouter;
