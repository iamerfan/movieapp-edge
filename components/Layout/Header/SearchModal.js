import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import styles from './SearchModal.module.scss'
import { useState } from 'react'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const SearchModal = data => {
   const router = useRouter()
   const queryRef = useRef()
   const closeRef = useRef()
   const handleSearch = e => {
      e.preventDefault()
      const searchValue = queryRef.current.value
      router.push(`/search/${searchValue}/1`)
      closeRef.current.click()
   }
   return (
      <Dialog.Root>
         <Dialog.Trigger asChild>
            <button className={styles.NavButton}>
               <MagnifyingGlassIcon />
               Search
            </button>
         </Dialog.Trigger>
         <Dialog.Portal>
            <Dialog.Overlay className={styles.DialogOverlay} />
            <Dialog.Content className={styles.DialogContent}>
               <Dialog.Title className={styles.DialogTitle}>Search Movies / Tv Shows</Dialog.Title>
               <form onSubmit={handleSearch}>
                  <fieldset className={styles.Fieldset}>
                     <label>Keyword</label>
                     <input placeholder='Breaking Bad , Game Of Thrones , etc... ' ref={queryRef} />
                  </fieldset>
                  <div>
                     <Dialog.Close asChild onClick={handleSearch}>
                        <button className={styles.SearchButton}>Search</button>
                     </Dialog.Close>
                  </div>
               </form>
               <Dialog.Close ref={closeRef} asChild>
                  <button className={styles.CloseIcon} aria-label='Close'>
                     <Cross2Icon />
                  </button>
               </Dialog.Close>
            </Dialog.Content>
         </Dialog.Portal>
      </Dialog.Root>
   )
}

export default SearchModal
