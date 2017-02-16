import React from 'react';
import FileInput from 'react-file-input';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import '../../styles/ChangePicture.css';

const ChangePicture = React.createClass({

	getInitialState(){
		return {img: ''}
	},
	componentDidMount: function () {
	$.ajax({
		url: "api/student/3",
		method: 'GET',
	})
	.done((data)=>{this.setState({img:data})})
},

	handleFile(file){
		let imageType = /^image\//;

		if (!imageType.test(file.type)) {
			console.log(file.type);
			return;
		}

		//attach image to screen
		var preview = document.getElementById('image-preview')
		preview.innerHTML = '';

		var img = document.createElement("img");
		img.className = "post-img";
		img.file = file;

		preview.appendChild(img);

		let reader = new FileReader();

		reader.onload = function(e) {
				img.src = e.target.result;
		};

		reader.readAsDataURL(file);
	},

	handleChange(target, e){
		let file = e.target.files ? e.target.files[0] : null;

		if(target === 'img' && file){

			this.setState({img: file});
			console.log('state1',this.setState.img)

			this.handleFile(file)

		}
	},
	handleSubmit(e){
		e.preventDefault();
		let formData = new FormData()
		formData.append('post', this.state.img, this.state.img.name);
		formData.append('caption', this.state.caption);
		let imgPath = JSON.stringify(this.state.img.name);

		$.ajax({
			url: 'api/student/3',
			type: 'PUT',
			cache: false,
      contentType: false,
      processData: false,
      data: formData
		})
		.done((data) => {
			var preview = document.getElementById('image-preview')
			preview.innerHTML = '';

			this.setState({img: null})
		})
		browserHistory.push('/student')
	},

	handleClick(e){
		document.getElementsByClassName('image-chooser')[0].click()
	},


	render(){
		let img = this.state.img
		return (
			<div id="parent-div">
				<form className="newPostForm" onSubmit={this.handleSubmit}>
					<FileInput className="image-chooser" accept=".png,.gif,.jpg" onChange={this.handleChange.bind(this, 'img')} />
					<p id="p-before">Before we begin</p>
      	<br/>
      	<p id="addProfile">Add a profile photo so instructors and mentors can recognize you.</p>

					<div id="image-preview"></div>

					<div className= "submitButtons">
					{
							img ?
							<img src={this.state.img.img_path}/>:
							<h2>Loading...</h2>
						}<br/>

					<input id="continue-button" type="button" onClick={this.handleSubmit}  value="Continue" /><br/><br/>
					<button id="uploadButton" type="button" onClick={this.handleClick}>Update profile picture</button><br/>


						<Link to="/"><p id="Skip-step">Skip this step</p></Link>


					</div>

				</form>
			</div>
		)
	}
})

export default ChangePicture;


