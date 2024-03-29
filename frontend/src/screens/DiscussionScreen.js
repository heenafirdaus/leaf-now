import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Discussion from '../components/Discussion';
import Loader from '../components/Loader';

//Actions
import { getAllDiscussions } from "../redux/actions/discussionActions";

const DiscussionScreen = () => {
    const dispatch = useDispatch();
    const discussionsDetails = useSelector((state) => state.discussions);
    const { loading, error, discussions =[] } = discussionsDetails;
    useEffect(() => {
        dispatch(getAllDiscussions());
      }, [dispatch]);
    if(loading){
        return <Loader/>
    }
    return (
        discussions.map(
            discussion => (
            <Discussion
                key={discussion._id}
                id={discussion._id}
                title={discussion.title}
                text={discussion.text}
                author={discussion.name}
                likes={discussion.likes}
                comments={discussion.comments}
                createdAt={discussion.createdAt}
            />))
    )
}
export default DiscussionScreen;