import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isThemeDark ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  width: 100vw;
  padding: 20px;
`

export const LoginSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: ${props => (props.isThemeDark ? '#000000' : '#ffffff')};
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 40%;
    padding: 40px;
  }
`

export const WebsiteLogoImage = styled.img`
  @media screen and (max-width: 768px) {
    height: 50%;
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    height: 100%;
    width: 50%;
  }
`

export const LoginFormContainer = styled.form`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
`

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`
export const InputField = styled.input`
  width: 100%;
  padding: 15px;
  color: ${props => (props.isThemeDark ? '#ffffff' : '#7e858e')};
  border: 1px solid #94a3b8;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const LabelField = styled.label`
  color: ${props => (props.isThemeDark ? '#ffffff' : '#7e858e')};
  font-family: Roboto;
  font-weight: bold;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  cursor: pointer;
`

export const CheckBoxField = styled.input`
  height: 20px;
  width: 20px;
  accent-color: #3b82f6;
  cursor: pointer;
`

export const ShowPasswordLabel = styled.label`
  color: ${props => (props.isThemeDark ? '#ffffff' : '#000000')};
  font-family: Roboto;
  font-weight: bold;
  cursor: pointer;
`

export const Para = styled.p`
  color: #ff0000;
  line-height: 0;
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
`

export const CustomButton = styled.button`
  border-width: 0px;
  border-radius: 10px;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 15px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
`
