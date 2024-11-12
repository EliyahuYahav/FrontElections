import { FC, useEffect } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import CardCandidates from "../Candidates/CardCandidates";
import { fetchCandidates } from "../../store/Candidates/GetCandidates";
import { useLocation } from "react-router-dom";

const ListCandidates: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
  
  const { error, status, Candidates } = useSelector((state: RootState) => state.Candidate);
  const location = useLocation();
  
  useEffect(() => {
     dispatch(fetchCandidates())
    }, []);
  
    if(status === "pending"){
        return <div>Loading...</div>
    }
  
  return (
  <div>
    <h2>{`Welcome ${location.state.userName}, Please choose one card! `}</h2>
    {!error ? Candidates?.map((candid)=>{
        return <CardCandidates candidate={candid} key={candid._id}/>
    }): <h2>{error}</h2>}
  </div>
  )
};

export default ListCandidates;
