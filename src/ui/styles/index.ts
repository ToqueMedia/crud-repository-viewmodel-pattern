import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}

  body {
	  width: 100vw;
	  background:#fefefe;
    	overflow: auto;
     &::-webkit-scrollbar {
    	overflow: hidden;
    }

  }

  body,
  input,
  textarea,
  button {
	font: 400 1rem Inter, sans-serif;
  }

  h1 {
	font-size: 2.5rem;
	font: 700;
	font-family: 'Work Sans', sans-serif;
  }

  h2 {
	font-size: 1.5rem;
  }

  button {
	cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
	font-weight: 600;
	font-family: Lexend, sans-serif;
  }

  input {
	outline: none;
  }
  a{
	text-decoration:none;
	color:#fff;
  }
  .modalContent,
  .secondModal {
	>img {
	  width: 15rem;
	  margin: 15px auto;
	  display: flex;
	  justify-content: center;
	  align-self: center;
	}
	> form {
	  margin: 20px 0;
	  width: 100%;
	  text-align: center;

	> label {
	  display: flex;
	  align-items: flex-start;
	  margin: 15px 0;
	  color: #1c1c1c;
	}

	>button {
	  margin-top: 25px;
	}
  }
}


.secondModal {
  >h1 {
	text-align: center;
	margin: 4rem 0 0 0;
  }

  >span {
	display: block;
	text-align: center;
	color: #1c1c1c;
	font-size: 15px;
	margin: 20px 0;
  }
}



`;
