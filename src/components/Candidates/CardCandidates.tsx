import { FC } from 'react'
import { Candidate } from '../../types/typecCandidates'
import { useDispatch } from 'react-redux'
import './CardCandidates.css'

interface candidateProps{
    candidate: Candidate
}

const CardCandidates:FC<candidateProps> = ({candidate}) => {
    const dispatch = useDispatch()
    return (
      <div className="CardCandidates">
        <h2>{candidate.name}</h2>
        <img src={candidate.image} alt="" />
        <div className="vote-container">
          <h3 className="vote-count">{candidate.votes}</h3>
          <span className="vote-label">Votes</span>
        </div>
        <button onClick={()=> {}}>Chose</button>
      </div>
    )
}


export default CardCandidates