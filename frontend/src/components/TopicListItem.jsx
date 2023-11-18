import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, onTopicClick, }) => (
  <div className='topic-list__item' onClick={() => { 
    console.log("Click event triggered");
    onTopicClick(); 
  }}>
    <span>{title}</span>
  </div>
);

TopicListItem.defaultProps = {
  title: 'Nature',
  link: 'insert link',
};

export default TopicListItem;