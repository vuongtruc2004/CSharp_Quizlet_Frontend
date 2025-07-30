import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import { IVocabulary } from '../services/vocabulary.table';

interface IProps {
    vocabularies: IVocabulary[],
}


const VocabularyTable = (props: IProps) => {
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
                            {props.vocabularies.map((row) => (
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