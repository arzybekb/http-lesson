import React from 'react'
import MuiModal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material'

const MODAL_TYPE = {
   MINI: { padding: '24px' },
   NORMAL: { padding: '30px' },
   AUTH: { width: '527px', padding: '30px' },
   WITHOUT_PADDINGS: { padding: '0px' },
}

export default function Modal({ children, type, sx, ...props }) {
   return (
      <StyledModal {...props}>
         <Wrapper type={type} sx={sx}>
            <Container>{children}</Container>
         </Wrapper>
      </StyledModal>
   )
}

const Title = ({ children }) => children

const Body = ({ children }) => children

Modal.Title = Title
Modal.Body = Body

const StyledModal = styled(MuiModal)``

const Wrapper = styled(Paper)`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   ${({ type }) => ({ ...MODAL_TYPE[type] })}
   max-height: 510px;
   overflow-x: hidden;
   overflow-y: auto;
   outline: none;
   ::-webkit-scrollbar {
      width: 9px;
      background-color: #f9f9fd;
      margin-left: 15px;
   }
   ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      width: 90px;
      max-height: 275px;
      background: #ececec;
   }
   ::-webkit-scrollbar-track {
      width: 9px;
      background: #ffffff;
      border-radius: 10px;
   }
`

const Container = styled('div')`
   box-sizing: border-box;
`
