import React from 'react';
import $ from 'jquery';

const TopicForm = React.createClass({
    getInitialState() {
        return {
            topics: [],
            // MentorId: null,
            // StudentId: null
        };
    },
    handleChange(inputField, e) {
        let isChecked = $(e.target).prop("checked"); //check if input is checked
        let topicName = e.target.value;
        let topics = this.state.topics;

        if (!isChecked) {
            //
            topics = topics.filter(topic => topic !== topicName);
        } else {
            topics.push(topicName);
        }
        this.setState({
            topics: topics,
            // MentorId: 1,
            //  StudentId: 1
        });
    },
    submitNewPost() {
        let topics = this.state.topics;
        topics.map(topic => {
            $.ajax({
                url: '/api/topic',
                type: 'POST',
                data: {
                    name: topic,
                    // MentorId: 1,
                    // StudentId: 1
                }
            });
        });
    },
    render() {
        return (

            < div >
            < form >
            < h1 > Select your Topics: < /h1>

            < input onChange = {this.handleChange.bind(this, 'topic')}
            type = "checkbox"
            name = "topic"
            value = "React" / > React < br / >
            < br / >
            < input onChange = {this.handleChange.bind(this, 'topic')}
            type = "checkbox"
            name = "topic"
            value = "Redux" / > Redux < br / >
            < br / >

            < input onChange = {this.handleChange.bind(this, 'topic')}
            type = "checkbox"
            name = "topic"
            value = "Jquery" / > Jquery < br / >
            < br / >
            < input onChange = {this.handleChange.bind(this, 'topic')}
            type = "checkbox"
            name = "topic"
            value = "Arrays" / > Arrays < br / >
            < br / >
            < input onChange = {this.handleChange.bind(this, 'topic')}
            type = "checkbox"
            name = "topic"
            value = "Algorithms" / > Algorithms < br / >
            < br / >
            < input onChange = {this.handleChange.bind(this, 'topic')}
            type = "checkbox"
            name = "topic"
            value = "Closure" / > Closure < br / >
            < br / >

            < input onChange = {this.handleChange.bind(this, 'topic')}
            type = "checkbox"
            name = "topic"
            value = "Callbacks" / > Callbacks < br / >
            < br / >
            < input onChange = {this.handleChange.bind(this, 'topic')}
            type = "checkbox"
            name = "topic"
            value = "Data Structures" / > Data Structures < br / >
            < br / >

            < input onClick = {this.submitNewPost}
            type = "button"
            value = "Submit" / >
            < /form> < /div>
        );
    }
});
export default TopicForm;
