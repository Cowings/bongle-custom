
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { BaseModal } from './BaseModal'
import {
  SHARE_TEXT,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
}: Props) => {
  if (!isGameLost && !isGameWon) {
    return (
      <BaseModal
        title='Bongle Custom'
        isOpen={isOpen}
        handleClose={handleClose}
      >

        <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              window.location.href = 'https://www.bongbong.com/games/bongle-custom/';
          }}
        >
          Make Your Own Word
        </button>
      </BaseModal>
    )
  }

  if (isGameLost) {
    return (
      <BaseModal
        title='Nice Try.'
        isOpen={isOpen}
        handleClose={handleClose}
      >
      {(
        <div className="mt-5 sm:mt-6 columns-1 dark:text-white">
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(
                guesses,
                isGameLost,
                isHardMode,
                isDarkMode,
                isHighContrastMode,
                handleShareToClipboard
              )
            }}
          >
            {SHARE_TEXT}
          </button>

          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              window.location.href = 'https://www.bongbong.com/games/bongle-custom/';
            }}
          >
            Make Your Own Word
          </button>
        </div>

        
      )}
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title='Well Done!'
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {(
        <div className="mt-5 sm:mt-6 columns-1 dark:text-white">
        <button
          type="button"
          className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          onClick={() => {
            shareStatus(
              guesses,
              isGameLost,
              isHardMode,
              isDarkMode,
              isHighContrastMode,
              handleShareToClipboard
            )
          }}
        >
          {SHARE_TEXT}
        </button>

        <button
          type="button"
          className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          onClick={() => {
            window.location.href = 'https://www.bongbong.com/games/bongle-custom/';
          }}
        >
          Make Your Own Word
        </button>
      </div>
      )}
    </BaseModal>
  )
}
