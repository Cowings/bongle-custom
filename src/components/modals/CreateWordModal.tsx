
import { BaseModal } from './BaseModal'
import { shareLink } from '../../lib/shareLink'

type Props = {
  isOpen: boolean
  word: string
  handleClose: () => void
  handleShareToClipboard: () => void
}

export const CreateWordModal = ({
  isOpen,
  word,
  handleClose,
  handleShareToClipboard,
}: Props) => {
  return (
    <BaseModal
      title='Generated Link'
      isOpen={isOpen}
      handleClose={handleClose}
    >
        <div className="mt-5 sm:mt-6 columns-1 dark:text-white">
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareLink(
                word,
                handleShareToClipboard
              )
            }}
          >
            Share Link
          </button>

          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              var encodedString = btoa(word);
              window.location.href = `https://custom.bongbong.com/?word=` + encodedString;
            }}
          >
            Go To Link
          </button>
        </div>
    </BaseModal>
  )
}
