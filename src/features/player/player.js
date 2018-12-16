import React from 'react'
import { connect } from 'react-redux'
import walkSprite from '../../assets/sprites/player_walk.png'
import HandleMovement from './movement'
const player = (props) => {
  return (
  <div 
    style={{
      position: 'absolute',
      top: props.position[1],
      left: props.position[0],
      backgroundImage: `url('${walkSprite}')`,
      backgroundPosition: '0 0',
      width: '40px',
      height: '40px'
   }}/>
  )
}

function mapStateToProps(state) {
  return {
    ...state.player
  }
}

export default connect(mapStateToProps) (HandleMovement(player))