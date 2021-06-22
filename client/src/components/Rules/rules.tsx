import React, {
  FunctionComponent
} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'primereact/button';

import './rules.css';

export const Rules: FunctionComponent = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Link to='/'><Button>Home</Button></Link>

      <div className='space5'></div>

      <ol>
        <a href='#texas-holdem-definition'><li>What is Texas hold'em poker</li></a>
        <a href='#texas-holdem-objective'><li>Objective</li></a>
        <a href='#texas-holdem-hands'><li>Texas hold'em hands</li></a>
      </ol>

      <div className='space2'></div>
      <div className='rules-text-section'>
        <h1 id='texas-holdem-definition'>What is Texas hold'em poker?</h1>
        <div className='space1'></div>
        <p>Texas hold 'em (also known as Texas holdem, hold 'em, and holdem) is one of the most popular variants of the card game of <a href='https://en.wikipedia.org/wiki/Poker' target='_blank'>poker</a>. Two cards, known as hole cards, are dealt face down to each player, and then five community cards are dealt face up in three stages. The stages consist of a series of three cards ("the flop"), later an additional single card ("the turn" or "fourth street"), and a final card ("the river" or "fifth street"). Each player seeks the best five card poker hand from any combination of the seven cards; the five community cards and their two hole cards. Players have betting options to check, call, raise, or fold. Rounds of betting take place before the flop is dealt and after each subsequent deal. The player who has the best hand and has not folded by the end of all betting rounds wins all of the money bet for the hand, known as the pot. In certain situations, a "split-pot" or "tie" can occur when two players have hands of equivalent value. This is also called a "chop-pot".</p>
      </div>

      <div className='rules-text-section'>
        <h1 id='texas-holdem-objective'>Objective</h1>
        <div className='space1'></div>
        <p>In Texas hold 'em, as in all variants of poker, individuals compete for an amount of money or chips contributed by the players themselves (called the pot). Because the cards are dealt randomly and outside the control of the players, each player attempts to control the amount of money in the pot based either on the hand they are holding, or on their prediction as to what their opponents may be holding and how they might behave.</p>
        <div className='space1'></div>
        <p>The game is divided into a series of hands (deals); at the conclusion of each hand, the pot is typically awarded to one player (an exception in which the pot is divided between two or more is discussed below). A hand may end at the showdown, in which case the remaining players compare their hands and the highest hand is awarded the pot; that highest hand is usually held by only one player, but can be held by more in the case of a tie. The other possibility for the conclusion of a hand occurs when all but one player have folded and have thereby abandoned any claim to the pot, in which case the pot is awarded to the player who has not folded.</p>
        <div className='space1'></div>
        <p>The objective of winning players is not to win every individual hand, but rather to make mathematically and psychologically better decisions regarding when and how much to bet, raise, call or fold. Winning poker players work to enhance their opponents' betting and maximize their own expected gain on each round of betting, to thereby increase their long-term winnings.</p>
      </div>

      <div className='rules-text-section'>
        <h1 id='texas-holdem-hands'>Texas hold'em hands</h1>
        <div className='space1'></div>
        <p>The texas holdem hands section will go here</p>
      </div>
    </div>
  );
};