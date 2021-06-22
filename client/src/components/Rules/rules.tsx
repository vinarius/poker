import React, {
  FunctionComponent
} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'primereact/button';

import './rules.css';
import aceOfSpades from '../../assets/Playing_Cards/AS.png';
import kingOfSpades from '../../assets/Playing_Cards/KS.png';
import queenOfSpades from '../../assets/Playing_Cards/QS.png';
import jackOfSpades from '../../assets/Playing_Cards/JS.png';
import tenOfSpades from '../../assets/Playing_Cards/10S.png';
import nineOfSpades from '../../assets/Playing_Cards/9S.png';
import eightOfSpades from '../../assets/Playing_Cards/8S.png';
import sevenOfSpades from '../../assets/Playing_Cards/7S.png';
import sixOfSpades from '../../assets/Playing_Cards/6S.png';
import fiveOfSpades from '../../assets/Playing_Cards/5S.png';
import fourOfSpades from '../../assets/Playing_Cards/4S.png';

import kingOfHearts from '../../assets/Playing_Cards/KH.png';
import jackOfHearts from '../../assets/Playing_Cards/JH.png';
import eightOfHearts from '../../assets/Playing_Cards/8H.png';

import kingOfClubs from '../../assets/Playing_Cards/KC.png';
import jackOfClubs from '../../assets/Playing_Cards/JC.png';

import kingOfDiamonds from '../../assets/Playing_Cards/KD.png';

const cardHeight = 60;

export const Rules: FunctionComponent = () => {
  return (
    <div className='flex-column-center'>
      <div className='space3'></div>
      <Link to='/'><Button>Home</Button></Link>

      <div className='space2'></div>

      <ol>
        <a href='#texas-holdem-definition'><li>What is Texas hold'em poker</li></a>
        <a href='#texas-holdem-objective'><li>Objective</li></a>
        <a href='#texas-holdem-hands'><li>Texas hold'em hands</li></a>
      </ol>

      <div className='space2'></div>

      <div className='rules-text-section'>
        <h1 id='texas-holdem-definition'>What is Texas hold'em poker?</h1>
        <hr />
        <div className='space1'></div>
        <p>Texas hold 'em (also known as Texas holdem, hold 'em, and holdem) is one of the most popular variants of the card game of <a href='https://en.wikipedia.org/wiki/Poker' target='_blank'>poker</a>. Two cards, known as hole cards, are dealt face down to each player, and then five community cards are dealt face up in three stages. The stages consist of a series of three cards ("the flop"), later an additional single card ("the turn" or "fourth street"), and a final card ("the river" or "fifth street"). Each player seeks the best five card poker hand from any combination of the seven cards; the five community cards and their two hole cards. Players have betting options to check, call, raise, or fold. Rounds of betting take place before the flop is dealt and after each subsequent deal. The player who has the best hand and has not folded by the end of all betting rounds wins all of the money bet for the hand, known as the pot. In certain situations, a "split-pot" or "tie" can occur when two players have hands of equivalent value. This is also called a "chop-pot".</p>
      </div>

      <div className='rules-text-section'>
        <h1 id='texas-holdem-objective'>Objective</h1>
        <hr />
        <div className='space1'></div>
        <p>In Texas hold 'em, as in all variants of poker, individuals compete for an amount of money or chips contributed by the players themselves (called the pot). Because the cards are dealt randomly and outside the control of the players, each player attempts to control the amount of money in the pot based either on the hand they are holding, or on their prediction as to what their opponents may be holding and how they might behave.</p>
        <div className='space1'></div>
        <p>The game is divided into a series of hands (deals); at the conclusion of each hand, the pot is typically awarded to one player (an exception in which the pot is divided between two or more is discussed below). A hand may end at the showdown, in which case the remaining players compare their hands and the highest hand is awarded the pot; that highest hand is usually held by only one player, but can be held by more in the case of a tie. The other possibility for the conclusion of a hand occurs when all but one player have folded and have thereby abandoned any claim to the pot, in which case the pot is awarded to the player who has not folded.</p>
        <div className='space1'></div>
        <p>The objective of winning players is not to win every individual hand, but rather to make mathematically and psychologically better decisions regarding when and how much to bet, raise, call or fold. Winning poker players work to enhance their opponents' betting and maximize their own expected gain on each round of betting, to thereby increase their long-term winnings.</p>
      </div>

      <div className='rules-text-section'>
        <h1 id='texas-holdem-hands'>Texas hold'em hands</h1>
        <hr />
        <div className='space1'></div>
        <p>Each hand has a rank, which is compared against the ranks of other hands participating in the showdown to decide who wins the pot. Each hand belongs to a category determined by the patterns formed by its cards. A hand in a higher-ranking category always ranks higher than a hand in a lower-ranking category. A hand is ranked within its category using the ranks of its cards. Individual cards are ranked, from highest to lowest: A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3 and 2. Suits are not ranked, so hands that differ by suit alone are of equal rank.</p>
        <div className='space1'></div>
        <p>There are nine categories of hand when using a standard 52-card deck, except under ace-to-five low rules where straights, flushes and straight flushes are not recognized. An additional category, five of a kind, exists when using one or more wild cards. The fewer hands a category contains, the higher its rank.</p>
      </div>

      <div className='rules-text-section'>
        <h1>Hand-ranking categories</h1>
        <hr />
        <ul>
          <a href='#hand-rank-royal-flush'><li>Royal Flush</li></a>
          <a href='#hand-rank-straight-flush'><li>Straight Flush</li></a>
          <a href='#hand-rank-four-of-a-kind'><li>Four of a Kind</li></a>
          <a href='#hand-rank-full-house'><li>Full House</li></a>
          <a href='#hand-rank-flush'><li>Flush</li></a>
          <a href='#hand-rank-straight'><li>Straight</li></a>
          <a href='#hand-rank-three-of-a-kind'><li>Three of a Kind</li></a>
          <a href='#hand-rank-two-pair'><li>Two Pair</li></a>
          <a href='#hand-rank-one-pair'><li>One Pair</li></a>
          <a href='#hand-rank-high-card'><li>High Card</li></a>
        </ul>

        <div className='space1'></div>

        <h1>Quick Reference</h1>
        
        <div className='space1'></div>

        <div>
          <div className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Royal Flush</div>
            <div className='hand-ranking-example-cards'>
              <img src={aceOfSpades} height={cardHeight} />
              <img src={kingOfSpades} height={cardHeight} />
              <img src={queenOfSpades} height={cardHeight} />
              <img src={jackOfSpades} height={cardHeight} />
              <img src={tenOfSpades} height={cardHeight} />
            </div>
          </div>
          <div className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Straight Flush</div>
            <div className='hand-ranking-example-cards'>
              <img src={nineOfSpades} height={cardHeight} />
              <img src={eightOfSpades} height={cardHeight} />
              <img src={sevenOfSpades} height={cardHeight} />
              <img src={sixOfSpades} height={cardHeight} />
              <img src={fiveOfSpades} height={cardHeight} />
            </div>
          </div>
          <div className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Four of a Kind</div>
            <div className='hand-ranking-example-cards'>
              <img src={kingOfSpades} height={cardHeight} />
              <img src={kingOfHearts} height={cardHeight} />
              <img src={kingOfClubs} height={cardHeight} />
              <img src={kingOfDiamonds} height={cardHeight} />
              <img src={fourOfSpades} height={cardHeight} />
            </div>
          </div>
          <div className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Full House</div>
            <div className='hand-ranking-example-cards'>
              <img src={jackOfSpades} height={cardHeight} />
              <img src={jackOfHearts} height={cardHeight} />
              <img src={jackOfClubs} height={cardHeight} />
              <img src={eightOfSpades} height={cardHeight} />
              <img src={eightOfHearts} height={cardHeight} />
            </div>
          </div>
          <div className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Flush</div>
            <div className='hand-ranking-example-cards'>
              <img src={aceOfSpades} height={cardHeight} />
              <img src={kingOfSpades} height={cardHeight} />
              <img src={queenOfSpades} height={cardHeight} />
              <img src={jackOfSpades} height={cardHeight} />
              <img src={tenOfSpades} height={cardHeight} />
            </div>
          </div>
          <div className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Straight</div>
            <div className='hand-ranking-example-cards'>
              <img src={aceOfSpades} height={cardHeight} />
              <img src={kingOfSpades} height={cardHeight} />
              <img src={queenOfSpades} height={cardHeight} />
              <img src={jackOfSpades} height={cardHeight} />
              <img src={tenOfSpades} height={cardHeight} />
            </div>
          </div>
          <div className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Three of a Kind</div>
            <div className='hand-ranking-example-cards'>
              <img src={aceOfSpades} height={cardHeight} />
              <img src={kingOfSpades} height={cardHeight} />
              <img src={queenOfSpades} height={cardHeight} />
              <img src={jackOfSpades} height={cardHeight} />
              <img src={tenOfSpades} height={cardHeight} />
            </div>
          </div>
          <div className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Two Pair</div>
            <div className='hand-ranking-example-cards'>
              <img src={aceOfSpades} height={cardHeight} />
              <img src={kingOfSpades} height={cardHeight} />
              <img src={queenOfSpades} height={cardHeight} />
              <img src={jackOfSpades} height={cardHeight} />
              <img src={tenOfSpades} height={cardHeight} />
            </div>
          </div>
          <div className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>One Pair</div>
            <div className='hand-ranking-example-cards'>
              <img src={aceOfSpades} height={cardHeight} />
              <img src={kingOfSpades} height={cardHeight} />
              <img src={queenOfSpades} height={cardHeight} />
              <img src={jackOfSpades} height={cardHeight} />
              <img src={tenOfSpades} height={cardHeight} />
            </div>
          </div>
          <div className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>High Card</div>
            <div className='hand-ranking-example-cards'>
              <img src={aceOfSpades} height={cardHeight} />
              <img src={kingOfSpades} height={cardHeight} />
              <img src={queenOfSpades} height={cardHeight} />
              <img src={jackOfSpades} height={cardHeight} />
              <img src={tenOfSpades} height={cardHeight} />
            </div>
          </div>
        </div>
      </div>

      <div className='space5'></div>
    </div>
  );
};