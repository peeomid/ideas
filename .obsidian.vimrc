" Obsidian Vim Configuration
" This file should be placed at the root of your vault (not inside .obsidian folder)

" Follow link under cursor with gd (like vim's go to definition)
exmap followlink obcommand editor:follow-link
nmap gd :followlink<CR>

" Go back and forward navigation (like browser history)
" Try different command variations - uncomment the one that works
exmap back obcommand app:go-back
exmap forward obcommand app:go-forward
" Alternative commands to try:
" exmap back obcommand workbench.action.navigateBack
" exmap forward obcommand workbench.action.navigateForward
" exmap back obcommand editor:navigate-back
" exmap forward obcommand editor:navigate-forward

nmap <C--> :back<CR>
nmap <C-i> :forward<CR>

" Alternative gd binding if the above doesn't work
" Uncomment one of these if the first gd binding fails:
" exmap followlink obcommand app:open-cursor-link
" exmap followlink obcommand obsidian-link-opener:open-link-under-cursor

" Optional: Toggle edit/preview mode
exmap toggleedit obcommand markdown:toggle-preview
nmap <Space>e :toggleedit<CR>

" Optional: Quick file switcher
exmap switcher obcommand switcher:open
nmap <Space>f :switcher<CR>