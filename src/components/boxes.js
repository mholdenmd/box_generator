import React, {useState} from 'react';

const BoxesForm = ()=> {

	const[FormInfo, setformInfo] = useState({
		color: ""
	})

	const [boxlist, setBoxlist] = useState([])

	const changeHandler = (event) => {
		setformInfo({
			...FormInfo, 
			[event.target.name]: event.target.value
		})
	}

	const colorHandler = (event) => {
		event.preventDefault()
		setBoxlist([...boxlist, FormInfo.color])
		setformInfo({
			color: ""
		})
	}

	return (
		<>
			<div>
			<form className ="col-6 mx-auto"onSubmit={colorHandler}>
					<p>Color<input type="text" name="color" id="" onChange={changeHandler}/>
					<input type="submit" value="Add"/></p>
			</form>
					
						{boxlist.map((box,i) => {
							return (
								<div key={i} style={{display: 'inline-block', margin: "20px", height: "150px", width: "150px", backgroundColor: box }}></div>
		
							)


						})
						
					}
					</div>
			
		</>
		
	);
};

export default BoxesForm;