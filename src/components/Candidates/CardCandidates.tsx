import { FC } from 'react'
import { Candidate } from '../../types/typecCandidates'
import { useDispatch, useSelector } from 'react-redux'
import './CardCandidates.css'
import { AppDispatch, RootState } from '../../store/store'
import { AddVotesCandidates } from '../../store/Candidates/AddVotes'

interface candidateProps{
    candidate: Candidate
}

const CardCandidates:FC<candidateProps> = ({candidate}) => {
  
  const dispatch = useDispatch<AppDispatch>();
  const {  User } = useSelector((state: RootState) => state.Login);

  const handelVotes = ()=>{
    if(candidate) {
      dispatch(AddVotesCandidates({userId: User?._id, candidatesId: candidate._id}))
    }
  }

    return (
      <div className="CardCandidates">
        <h2>{candidate.name}</h2>
        <img src={candidate.image} alt="" />
        <div className="vote-container">
          <h3 className="vote-count">{candidate.votes}</h3>
          <span className="vote-label">Votes</span>
        </div>
        <button onClick={()=> {handelVotes()}}>Chose</button>
      </div>
    )
}


export default CardCandidates