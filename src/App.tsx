import React, { useState } from 'react'
import './App.css'
import Sample from './components/Sample'
import MINE from './Assets/Bomb.png'
import LEVEL from './Assets/Level.png'
import TIMER from './Assets/Timer.png'
import MediaQuery from './components/MediaQuery'

const App: React.FC = () => {
  const { isDeviceSm } = MediaQuery()
  const [click, setClick] = useState(false)
  const TilesDetails = [
    {
      title: 'Levels',
      icon: LEVEL,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur iure officia ducimus tempora eligendi id velit asperiores similique aperiam numquam?',
    },
    {
      title: 'Mines',
      icon: MINE,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur iure officia ducimus tempora eligendi id velit asperiores similique aperiam numquam?',
    },
    {
      title: 'Timer',
      icon: TIMER,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur iure officia ducimus tempora eligendi id velit asperiores similique aperiam numquam?',
    },
  ]
  return (
    <>
      {click && <Sample />}
      <div className="App">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p
            style={{
              fontSize: isDeviceSm ? 36 : 48,
              fontWeight: 700,
              color: 'white',
              letterSpacing: 1.1,
            }}
          >
            MINE
          </p>
          <p
            style={{
              fontSize: isDeviceSm ? 36 : 48,
              fontWeight: 700,
              color: '#CAA5EF',
              letterSpacing: 1.1,
            }}
          >
            SWEEPER
          </p>
        </div>
        <div style={{ width: isDeviceSm ? '70%' : '60%', marginTop: -40 }}>
          <p style={{ fontSize: 14, color: 'white' }}>
            <span style={{ fontWeight: 600, letterSpacing: 1 }}>
              Minesweeper
            </span>{' '}
            is a logic puzzle video game genre. The game features a grid of
            clickable squares, with hidden mines scattered throughout the board.
            The objective is to clear the board without detonating any mines,
            with help from clues about the number of neighboring mines in each
            field.
          </p>
          {isDeviceSm && (
            <div
              style={{
                marginTop: 20,
                marginBottom: 25,
              }}
            >
              <button
                style={Style.button}
                type="button"
                onClick={() => setClick(true)}
              >
                Play Game
              </button>
            </div>
          )}
          <div
            style={{
              display: isDeviceSm ? '' : 'flex',
            }}
          >
            {TilesDetails.map((d, i) => (
              <div
                style={{
                  background: '#CAA5EF',
                  marginTop: 10,
                  marginBottom: 30,
                  borderRadius: 15,
                  paddingTop: 20,
                  // eslint-disable-next-line no-nested-ternary
                  marginRight: isDeviceSm
                    ? 0
                    : i === TilesDetails.length - 1
                    ? 0
                    : 30,
                }}
              >
                <div>
                  <div style={Style.halfRectangle}>
                    <img
                      style={{
                        position: 'relative',
                        width: 48,
                        height: 48,
                        marginTop: 10,
                        marginLeft: -10,
                      }}
                      src={d.icon}
                      alt={d.title}
                    />
                  </div>
                </div>
                <div
                  style={{
                    textAlign: 'left',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 20,
                    color: '#270847',
                  }}
                >
                  <p style={{ fontSize: 18 }}>
                    <b>{d.title}</b>
                  </p>
                  <p style={{ fontSize: 14 }}>{d.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            style={Style.button}
            type="button"
            onClick={() => setClick(true)}
          >
            Play Game
          </button>
        </div>
      </div>
    </>
  )
}

const Style = {
  heading2: {
    fontSize: 48,
    fontWeight: 700,
    color: '#CAA5EF',
    letterSpacing: 1.1,
  },
  heading1: {
    fontSize: 48,
    fontWeight: 700,
    color: 'white',
    letterSpacing: 1.1,
  },
  button: {
    padding: 10,
    borderRadius: 30,
    paddingLeft: 40,
    paddingRight: 40,
    background: 'white',
    borderColor: 'white',
    borderStyle: 'solid',
    color: '#52079D',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: 14,
  },
  halfRectangle: {
    display: 'block',
    width: 90,
    height: 70,
    backgroundColor: '#52079D',
    opacity: 0.3,
    borderRadius: '50% 50% 50% 50% / 0% 50% 50% 0%',
  },
}

export default App
