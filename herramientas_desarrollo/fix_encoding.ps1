$fd = [char]0xFFFD
$heart = [char]0x2661

$emdash = [char]0x2014
$copy   = [char]0x00A9
$larrow = [char]0x2190
$iquest = [char]0x00BF
$bullet = [char]0x2022
$pkg    = [System.Char]::ConvertFromUtf32(0x1F4E6)
$card   = [System.Char]::ConvertFromUtf32(0x1F4B3)
$pray   = [System.Char]::ConvertFromUtf32(0x1F64F)

$ia = [char]0x00ED  # i acento
$oa = [char]0x00F3  # o acento
$ea = [char]0x00E9  # e acento
$aa = [char]0x00E1  # a acento
$ua = [char]0x00FA  # u acento
$nt = [char]0x00F1  # n tilde
$EA = [char]0x00C9  # E mayus acento
$OA = [char]0x00D3  # O mayus acento

$files = Get-ChildItem -Path 'e:\Webs\Aisha Store' -Filter '*.html'

foreach ($file in $files) {
    $c = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)

    # Tildes
    $c = $c.Replace("env${fd}o",    "env${ia}o")
    $c = $c.Replace("Env${fd}o",    "Env${ia}o")
    $c = $c.Replace("Env${fd}os",   "Env${ia}os")
    $c = $c.Replace("C${fd}mo",     "C${oa}mo")
    $c = $c.Replace("T${fd}rminos", "T${ea}rminos")
    $c = $c.Replace("Qui${fd}nes",  "Qui${ea}nes")
    $c = $c.Replace("Dise${fd}ado", "Dise${nt}ado")
    $c = $c.Replace("B${fd}sicos",  "B${aa}sicos")
    $c = $c.Replace("Tambi${fd}n",  "Tambi${ea}n")
    $c = $c.Replace("Men${fd}",     "Men${ua}")
    $c = $c.Replace("m${fd}todo",   "m${ea}todo")
    $c = $c.Replace("M${fd}todo",   "M${ea}todo")
    $c = $c.Replace("SECCI${fd}N",  "SECCI${OA}N")
    $c = $c.Replace("TAMBI${fd}N",  "TAMBI${EA}N")
    $c = $c.Replace("est${fd}n",    "est${aa}n")
    $c = $c.Replace("m${fd}s",      "m${aa}s")
    $c = $c.Replace("est${fd} vac${fd}o", "est${aa} vac${ia}o")
    $c = $c.Replace("est${fd}",     "est${aa}")
    $c = $c.Replace("vac${fd}o",    "vac${ia}o")
    $c = $c.Replace("confirmar${fd}","confirmar${aa}")
    $c = $c.Replace("Bot${fd}n",    "Bot${oa}n")

    # Simbolos
    $c = $c.Replace("Carrito ${fd} AISHA STORE",  "Carrito ${emdash} AISHA STORE")
    $c = $c.Replace("CARRITO ${fd} ESTILO",       "CARRITO ${emdash} ESTILO")
    $c = $c.Replace("${fd} AISHA STORE",           "${emdash} AISHA STORE")
    $c = $c.Replace("${fd} 2026 Aisha Store ${fd} Indumentaria", "${copy} 2026 Aisha Store ${emdash} Indumentaria")
    $c = $c.Replace("${fd} Volver",               "${larrow} Volver")
    $c = $c.Replace("${fd}Vaciar",                "${iquest}Vaciar")

    # Separadores &nbsp; en header-top (reemplaza ?&nbsp; por &nbsp;)
    $amp = [char]0x26
    $c = $c.Replace("${amp}nbsp;${fd}${amp}nbsp;", "${amp}nbsp;${amp}nbsp;")

    # Emojis en mensaje WhatsApp
    $c = $c.Replace("${fd}${fd} Quiero coordinar", "${pkg} Quiero coordinar")
    $c = $c.Replace("${fd}${fd} Preferi",          "${card} Preferi")
    $c = $c.Replace("Gracias ${fd}${fd}",          "Gracias ${pray}")

    # Basura >heart dejada por ediciones anteriores
    $junk1 = "->" + $heart
    $junk2 = "+>" + $heart
    $junk3 = ">" + $heart
    $c = $c.Replace($junk1, "-")
    $c = $c.Replace($junk2, "+")
    $c = $c.Replace($junk3, "")

    [System.IO.File]::WriteAllText($file.FullName, $c, (New-Object System.Text.UTF8Encoding $false))
    Write-Host "OK: $($file.Name)"
}

Write-Host "Terminado."
