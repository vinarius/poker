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
import twoOfSpades from '../../assets/Playing_Cards/2S.png';

import kingOfHearts from '../../assets/Playing_Cards/KH.png';
import jackOfHearts from '../../assets/Playing_Cards/JH.png';
import tenOfHearts from '../../assets/Playing_Cards/10H.png';
import nineOfHearts from '../../assets/Playing_Cards/9H.png';
import eightOfHearts from '../../assets/Playing_Cards/8H.png';
import fourOfHearts from '../../assets/Playing_Cards/4H.png';
import twoOfHearts from '../../assets/Playing_Cards/2H.png';

import aceOfClubs from '../../assets/Playing_Cards/AC.png';
import kingOfClubs from '../../assets/Playing_Cards/KC.png';
import jackOfClubs from '../../assets/Playing_Cards/JC.png';
import tenOfClubs from '../../assets/Playing_Cards/10C.png';
import eightOfClubs from '../../assets/Playing_Cards/8C.png';
import fiveOfClubs from '../../assets/Playing_Cards/5C.png';

import kingOfDiamonds from '../../assets/Playing_Cards/KD.png';
import jackOfDiamonds from '../../assets/Playing_Cards/JD.png';
import eightOfDiamonds from '../../assets/Playing_Cards/8D.png';
import fourOfDiamonds from '../../assets/Playing_Cards/4D.png';
import twoOfDiamonds from '../../assets/Playing_Cards/2D.png';

const cardHeight = 60;

export const Rules: FunctionComponent = () => {
  return (
    <div className='flex-column-center'>
      <div className='space3'></div>
      <Link to='/'><Button>Home</Button></Link>

      <div className='space2'></div>

      <h1 id='top'>How to Play</h1>
      <hr className='hr-width' />

      <div className='space1'></div>

      <ol>
        <a href='#texas-holdem-definition'><li className='text-link'>What is Texas hold'em poker</li></a>
        <a href='#texas-holdem-objective'><li className='text-link'>Objective</li></a>
        <a href='#texas-holdem-hands'><li className='text-link'>Texas hold'em hands</li></a>
        <a href='#texas-holdem-dealer-button'><li className='text-link'>The Dealer Button</li></a>
        <a href='#texas-holdem-streets'><li className='text-link'>Hand Streets</li></a>
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
        <p>Each hand has a rank, which is compared against the ranks of other hands participating in <a href='#handstreets-showdown'>the showdown</a> to decide who wins the pot. Each hand belongs to a category determined by the patterns formed by its cards. A hand in a higher-ranking category always ranks higher than a hand in a lower-ranking category. A hand is ranked within its category using the ranks of its cards. Individual cards are ranked, from highest to lowest: A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3 and 2. Suits are not ranked, so hands that differ by suit alone are of equal rank.</p>
        <div className='space1'></div>
        <p>There are nine categories of hand when using a standard 52-card deck, except under ace-to-five low rules where straights, flushes and straight flushes are not recognized. An additional category, five of a kind, exists when using one or more wild cards. The fewer hands a category contains, the higher its rank.</p>
      </div>

      <div id='hand-ranking-categories' className='rules-text-section'>
        <h1>Hand-ranking Categories</h1>
        <hr />
        <ol className='m-1'>
          <a href='#hand-rank-royal-flush'><li className='text-link'>Royal Flush</li></a>
          <a href='#hand-rank-straight-flush'><li className='text-link'>Straight Flush</li></a>
          <a href='#hand-rank-four-of-a-kind'><li className='text-link'>Four of a Kind</li></a>
          <a href='#hand-rank-full-house'><li className='text-link'>Full House</li></a>
          <a href='#hand-rank-flush'><li className='text-link'>Flush</li></a>
          <a href='#hand-rank-straight'><li className='text-link'>Straight</li></a>
          <a href='#hand-rank-three-of-a-kind'><li className='text-link'>Three of a Kind</li></a>
          <a href='#hand-rank-two-pair'><li className='text-link'>Two Pair</li></a>
          <a href='#hand-rank-one-pair'><li className='text-link'>One Pair</li></a>
          <a href='#hand-rank-high-card'><li className='text-link'>High Card</li></a>
        </ol>
        
        <div className='space1'></div>

        <div>
          <div id='hand-rank-royal-flush' className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Royal Flush</div>
            <div className='hand-ranking-example-cards'>
              <img alt='Ace of spades playing card' src={aceOfSpades} height={cardHeight} />
              <img alt='King of spades playing card' src={kingOfSpades} height={cardHeight} />
              <img alt='Queen of spades playing card' src={queenOfSpades} height={cardHeight} />
              <img alt='Jack of spades playing card' src={jackOfSpades} height={cardHeight} />
              <img alt='Ten of spades playing card' src={tenOfSpades} height={cardHeight} />
            </div>
            <p>Five cards of the same suit, ranked ace through ten.</p>
          </div>

          <div className='space2'></div>

          <div id='hand-rank-straight-flush' className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Straight Flush</div>
            <div className='hand-ranking-example-cards'>
              <img alt='Nine of spades playing card' src={nineOfSpades} height={cardHeight} />
              <img alt='Eight of spades playing card' src={eightOfSpades} height={cardHeight} />
              <img alt='Seven of spades playing card' src={sevenOfSpades} height={cardHeight} />
              <img alt='Six of spades playing card' src={sixOfSpades} height={cardHeight} />
              <img alt='Five of spades playing card' src={fiveOfSpades} height={cardHeight} />
            </div>
            <p>Five cards of the same suit and consecutively ranked.</p>
          </div>

          <div className='space2'></div>

          <div id='hand-rank-four-of-a-kind' className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Four of a Kind</div>
            <div className='hand-ranking-example-cards'>
              <img alt='King of spades playing card' src={kingOfSpades} height={cardHeight} />
              <img alt='King of hearts playing card' src={kingOfHearts} height={cardHeight} />
              <img alt='King of clubs playing card' src={kingOfClubs} height={cardHeight} />
              <img alt='King of diamonds playing card' src={kingOfDiamonds} height={cardHeight} />
              <img alt='Four of spades playing card' src={fourOfSpades} height={cardHeight} />
            </div>
            <p>Four cards of the same rank.</p>
          </div>

          <div className='space2'></div>

          <div id='hand-rank-full-house' className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Full House</div>
            <div className='hand-ranking-example-cards'>
              <img alt='Jack of spades playing card' src={jackOfSpades} height={cardHeight} />
              <img alt='Jack of hearts playing card' src={jackOfHearts} height={cardHeight} />
              <img alt='Jack of clubs playing card' src={jackOfClubs} height={cardHeight} />
              <img alt='Eight of spades playing card' src={eightOfSpades} height={cardHeight} />
              <img alt='Eight of hearts playing card' src={eightOfHearts} height={cardHeight} />
            </div>
            <p>Three cards of the same rank and two more cards of the same rank.</p>
          </div>

          <div className='space2'></div>

          <div id='hand-rank-flush' className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Flush</div>
            <div className='hand-ranking-example-cards'>
              <img alt='Ace of spades playing card' src={aceOfSpades} height={cardHeight} />
              <img alt='Jack of spades playing card' src={jackOfSpades} height={cardHeight} />
              <img alt='Eight of spades playing card' src={eightOfSpades} height={cardHeight} />
              <img alt='Five of spades playing card' src={fiveOfSpades} height={cardHeight} />
              <img alt='Two of spades playing card' src={twoOfSpades} height={cardHeight} />
            </div>
            <p>Any five cards of the same suit.</p>
          </div>

          <div className='space2'></div>

          <div id='hand-rank-straight' className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Straight</div>
            <div className='hand-ranking-example-cards'>
              <img alt='Queen of spades playing card' src={queenOfSpades} height={cardHeight} />
              <img alt='Jack of diamonds playing card' src={jackOfDiamonds} height={cardHeight} />
              <img alt='Ten of hearts playing card' src={tenOfHearts} height={cardHeight} />
              <img alt='Nine of spades playing card' src={nineOfSpades} height={cardHeight} />
              <img alt='Eight of diamonds playing card' src={eightOfDiamonds} height={cardHeight} />
            </div>
            <p>Any five cards consecutively ranked.</p>
          </div>

          <div className='space2'></div>

          <div id='hand-rank-three-of-a-kind' className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Three of a Kind</div>
            <div className='hand-ranking-example-cards'>
              <img alt='Eight of clubs playing card' src={eightOfClubs} height={cardHeight} />
              <img alt='Eight of spades playing card' src={eightOfSpades} height={cardHeight} />
              <img alt='Eight of diamonds playing card' src={eightOfDiamonds} height={cardHeight} />
              <img alt='King of spades playing card' src={kingOfSpades} height={cardHeight} />
              <img alt='Four of hearts playing card' src={fourOfHearts} height={cardHeight} />
            </div>
            <p>Three cards of the same rank.</p>
          </div>

          <div className='space2'></div>

          <div id='hand-rank-two-pair' className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>Two Pair</div>
            <div className='hand-ranking-example-cards'>
              <img alt='Ace of spades playing card' src={aceOfSpades} height={cardHeight} />
              <img alt='Ace of clubs playing card' src={aceOfClubs} height={cardHeight} />
              <img alt='Jack of diamonds playing card' src={jackOfDiamonds} height={cardHeight} />
              <img alt='Jack of clubs playing card' src={jackOfClubs} height={cardHeight} />
              <img alt='Seven of spades playing card' src={sevenOfSpades} height={cardHeight} />
            </div>
            <p>Two cards of the same rank and two more cards of the same rank.</p>
          </div>

          <div className='space2'></div>

          <div id='hand-rank-one-pair' className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>One Pair</div>
            <div className='hand-ranking-example-cards'>
              <img alt='Ten of hearts playing card' src={tenOfHearts} height={cardHeight} />
              <img alt='Ten of clubs playing card' src={tenOfClubs} height={cardHeight} />
              <img alt='Nine of hearts playing card' src={nineOfHearts} height={cardHeight} />
              <img alt='Four of diamonds playing card' src={fourOfDiamonds} height={cardHeight} />
              <img alt='Two of diamonds playing card' src={twoOfDiamonds} height={cardHeight} />
            </div>
            <p>Two cards of the same rank.</p>
          </div>

          <div className='space2'></div>

          <div id='hand-rank-high-card' className='hand-ranking-example'>
            <div className='hand-ranking-example-name'>High Card</div>
            <div className='hand-ranking-example-cards'>
              <img alt='Ace of clubs playing card' src={aceOfClubs} height={cardHeight} />
              <img alt='Jack of diamonds playing card' src={jackOfDiamonds} height={cardHeight} />
              <img alt='Ten of spades playing card' src={tenOfSpades} height={cardHeight} />
              <img alt='Five of clubs playing card' src={fiveOfClubs} height={cardHeight} />
              <img alt='Two of hearts playing card' src={twoOfHearts} height={cardHeight} />
            </div>
            <p>Five unmatched cards. This example would be referred to as "Ace-high."</p>
          </div>
        </div>
      </div>

      <div className='rules-text-section'>
        <h1 id='texas-holdem-dealer-button'>The Dealer Button</h1>
        <hr />

        <div className='space1'></div>

        <p>The button determines which player at the table is the acting dealer.</p>

        <div className='space1'></div>

        <p>The play moves clockwise around the table, starting to the left of the dealer button. The 'button' is a round disc that sits in front of a player and is rotated one seat to the left every hand. When playing in casinos and poker rooms, the player with the dealer button doesn't deal the cards (the poker room hires someone to do that). When you play poker at home with friends, the player with the button usually deals the hands. The first two players sitting to the immediate left of the button are required to post a 'small blind' and a 'big blind' to initiate the betting.</p>

        <div className='space1'></div>
        
        <p>In Texas hold'em, the player on button, or last active player closest to the button, receives the last action on all post-flop streets of play. While the dealer button dictates which players have to post the small and big blinds, it also determines where the dealing of the cards begin. The player to the immediate left of the dealer button in the small blind receives the first card and then the dealer pitches cards around the table in a clockwise motion from player to player until each participant has received two starting cards.</p>
      </div>

      <div className='rules-text-section'>
        <h1 id='texas-holdem-streets'>Hand Streets</h1>
        <hr />

        <div className='space1'></div>

        <p>Each hand progress in multiple phases, or 'streets'.</p>

        <div className='space1'></div>

        <ol className='m-1'>
          <a href='#handstreets-blinds'><li className='text-link'>The Blinds</li></a>
          <a href='#handstreets-preflop'><li className='text-link'>Preflop</li></a>
          <a href='#handstreets-flop'><li className='text-link'>The Flop</li></a>
          <a href='#handstreets-turn'><li className='text-link'>The Turn</li></a>
          <a href='#handstreets-river'><li className='text-link'>The River</li></a>
          <a href='#handstreets-showdown'><li className='text-link'>The Showdown</li></a>
        </ol>

        <div className='space1'></div>

        <p id='handstreets-blinds'>The Blinds</p>

        <div className='space1'></div>

        <p>Before every new hand begins, two players at the table are obligated to post small and big blinds. The blinds are forced bets that begin the wagering. The blinds ensure there will be some level of 'action' on every hand. The player directly to the left of the button posts the small blind, and the player to his or her direct left posts the big blind. The small blind is generally half the amount of the big blind. In a "$1/$2" Texas holdem game, the small blind is $1 and the big blind is $2.</p>

        <div className='space2'></div>

        <p id='handstreets-preflop'>Preflop</p>

        <div className='space1'></div>

        <p>The first round of betting takes place right after each player has been dealt two hole cards. The first player to act is the player to the left of the big blind. This position referred to as 'under the gun' because the player has to act first. The first player has three options.</p>

        <ul className='m-1'>
          <li><strong>Call:</strong> match the amount of the big blind</li>
          <li><strong>Raise:</strong> increase the bet within the specific limits of the game</li>
          <li><strong>Fold:</strong> throw the hand away</li>
        </ul>

        <p>If the player chooses to fold, he or she is out of the game and no longer eligible to win the current hand.</p>

        <div className='space1'></div>

        <p>The amount a player can raise to depends on the game that is being played. In a game of no-limit Texas hold'em, the minimum opening raise must be at least twice the big blind, and the maximum raise can be all of the chips a player has in his or her stack (an "all-in" bet).</p>

        <div className='space1'></div>

        <p>After the first player ("under the gun") acts, the play proceeds in a clockwise fashion around the table with each player also having the same three options — to call, to raise, or fold. Once the last bet is called and the action is "closed," the preflop round is over and the play moves on to the "flop."</p>

        <div className='space2'></div>

        <p id='handstreets-flop'>The Flop</p>

        <div className='space1'></div>

        <p>After the first preflop betting round has been completed, the first three community cards are dealt and a second betting round follows involving only the players who have not folded already. In this betting round (and subsequent ones), the action starts with the first active player to the left of the button. Along with the options to bet, call, fold, or raise, a player now has the option to "check" if no betting action has occurred beforehand. A check simply means to pass the action to the next player in the hand. Again betting continues until the last bet or raise has been called (which closes the action). It is possible for every remaining player to decide to check, which will end the betting round.</p>

        <div className='space2'></div>

        <p id='handstreets-turn'>The Turn</p>

        <div className='space1'></div>

        <p>The fourth community card, called the turn, is dealt face-up following all betting actions on the flop. Once this has been completed, another round of betting occurs, similar to that on the previous street of play. Again players have the options to check, bet, call, fold, or raise.</p>

        <div className='space2'></div>

        <p id='handstreets-river'>The River</p>

        <div className='space1'></div>

        <p>The fifth community card, called the river, is dealt face-up following all betting action on the turn. Once this has been completed, another round of betting occurs, similar to what took play on the previous street of play. Once more the remaining players have the options to check, bet, call, fold, or raise.</p>

        <div className='space1'></div>

        <p>After all betting action has been completed, the remaining players in the hand with hole cards now expose their holdings to determine a winner. This is called the showdown.</p>

        <div className='space2'></div>

        <p id='handstreets-showdown'>The Showdown</p>

        <div className='space1'></div>

        <p>The remaining players show their hole cards and a winning hand is determined. The player with the best combination of five cards wins the pot according to the <a href='#hand-ranking-categories'>hand rankings</a>. Players construct their hands by choosing the five best cards from the seven available (their two hole cards and the five community cards).</p>

        <div className='space1'></div>

        <p>If the board is showing:</p>
        <div className='space1'></div>
        <p><span className='text-playing-card-black'>9♣</span> <span className='text-playing-card-black'>5♠</span> <span className='text-playing-card-red'>K♦</span> <span className='text-playing-card-black'>3♠</span> <span className='text-playing-card-red'>A♥</span></p>
        <div className='space1'></div>
        <p>A player with the two hole cards <span className='text-playing-card-red'>A♦</span> <span className='text-playing-card-black'>9♠</span> would have two pair (aces and nines) and would lose to a player who has <span className='text-playing-card-red'>9♦</span> <span className='text-playing-card-red'>9♥</span> resolving to three of a kind (three nines).</p>

        <div className='space2'></div>

        <div className='flex-space-around'>
          <Link to='/'><Button>Home</Button></Link>
          <a href='#top'><Button>Back To Top</Button></a>
        </div>
        
      </div>

      <div className='space5'></div>
    </div>
  );
};