import React from 'react';
import FileInput from 'react-file-input';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import '../../styles/UploadPhoto.css';

const UploadPicture = React.createClass({
	getInitialState(){
		return {img: null}
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
			this.handleFile(file);
		}
	},

	handleSubmit(e){
		e.preventDefault();
		let formData = new FormData()
		formData.append('post', this.state.img, this.state.img.name);
		formData.append('caption', this.state.caption);
		let imgPath = JSON.stringify(this.state.img.name);

		$.ajax({
			url: 'api/student/1',
			type: 'PUT',
			cache: false,
      contentType: false,
      processData: false,
      data: formData
		})
		.done((data) => {
			var preview = document.getElementById('image-preview')
			preview.innerHTML = '';
			this.setState({img: null, caption: ''})
		})

		browserHistory.push('/change-picture')
	},

	handleClick(e){
		document.getElementsByClassName('image-chooser')[0].click()
	},

	render(){
		let img = this.state.img
		return (
			<div id="div-parent">
				<form className="newPostForm" onSubmit={this.handleSubmit}>
					<FileInput className="image-chooser" accept=".png,.gif,.jpg" onChange={this.handleChange.bind(this, 'img')} />
					<center>
					<p id="before-beg">Before we begin</p>
      		<br/>
      		<p id="Add-Prof">Add a profile photo so instructors and mentors can recognize you.</p>
      		</center>
					<div id="image-preview"></div>
					<div className= "submitButtons">
						{
							img ?
							<button id="continue-button" type="submit">Continue</button> :
							<div>
								<img id='astronaut' src={require('../../../public/astronaut.png')} />
								<br/>
								<button id="uploadButton" type="button" onClick={this.handleClick}>Upload photo</button>
							</div>
						}
						<center>
						<Link to="/student"><p id="Skip-step">Skip this step</p></Link>
						</center>
					</div>
				</form>
			</div>
		)
	}
})

export default UploadPicture;
