import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';


const VocabularyTable = () => {
    const rows = [
        { id: 1, kanji: 'Hello', japanese: 'A greeting', meaning: 'Hello, how are you?' },
        { id: 2, kanji: 'World', japanese: 'The earth and all its inhabitants', meaning: 'The world is beautiful.' },
        // Add more rows as needed
    ];
    return (
        <>
            <Box sx={{ width: '100%', overflow: 'hidden', marginTop: '10rem', paddingRight: '20px' }}>
                <TableContainer component={Box} >
                    <Table >
                        <TableHead>
                            <TableRow >
                                <TableCell sx={{ textAlign: 'center' }}>STT</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Kanji</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Tiếng Nhật</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Nghĩa</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Hành Động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.id}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.kanji}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.japanese}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.meaning}</TableCell>
                                    <TableCell
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <InfoOutlinedIcon />
                                        <CreateOutlinedIcon />
                                        <DeleteOutlineOutlinedIcon />
                                        <StarBorderPurple500OutlinedIcon />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </>
    )
}

export default VocabularyTable