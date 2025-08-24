'use client';

import { useEffect, useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, Stack, Box, Divider
} from '@mui/material';

export type NewBook = {
  title: string;
  description: string;
  totalChapters: number;
  image: string;
};

type Props = {
  open: boolean;
  mode: 'create' | 'edit';
  defaultValues?: Partial<NewBook>;
  onClose: () => void;
  onSubmit: (book: NewBook) => void;
};

export default function CreateBookDialog({
  open, mode, defaultValues, onClose, onSubmit
}: Props) {
  const [form, setForm] = useState<NewBook>({
    title: '', description: '', totalChapters: 1, image: '',
  });

  useEffect(() => {
    if (!open) return;
    setForm({
      title: defaultValues?.title ?? '',
      description: defaultValues?.description ?? '',
      totalChapters: defaultValues?.totalChapters ?? 1,
      image: defaultValues?.image ?? '',
    });
  }, [open, defaultValues]);

  const canSubmit =
    form.title.trim().length > 1 &&
    form.description.trim().length > 0 &&
    form.totalChapters > 0;

  const update =
    (k: keyof NewBook) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        setForm(p => ({ ...p, [k]: k === 'totalChapters' ? (Number(v) || 1) : v }));
      };

  const submit = () => {
    if (!canSubmit) return;
    onSubmit({
      title: form.title.trim(),
      description: form.description.trim(),
      totalChapters: form.totalChapters,
      image: form.image.trim(),
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm"
      slotProps={{ backdrop: { sx: { backgroundColor: 'rgba(0,0,0,.6)', backdropFilter: 'blur(2px)' } } }}
      PaperProps={{
        sx: {
          borderRadius: 3, overflow: 'hidden', bgcolor: '#1e1f29',
          border: '1px solid rgba(255,255,255,.08)',
          boxShadow: '0 10px 35px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.04)',
        }
      }}
    >
      <DialogTitle sx={{ px: 3, py: 2, fontWeight: 800, color: 'white' }}>
        {mode === 'create' ? 'Thêm mới sách' : 'Sửa sách'}
      </DialogTitle>
      <Divider sx={{ borderColor: 'rgba(255,255,255,.06)' }} />

      <DialogContent sx={{ px: 3, py: 2 }}>
        <Stack spacing={2}>
          <TextField
            label="Tên sách *" value={form.title} onChange={update('title')}
            required fullWidth size="small"
            sx={{
              '& .MuiInputLabel-root': { color: 'rgba(255,255,255,.7)' },
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255,255,255,.04)', borderRadius: 2,
                '& fieldset': { borderColor: 'rgba(255,255,255,.12)' },
              },
            }}
          />
          <TextField
            label="Mô tả *" value={form.description} onChange={update('description')}
            required multiline minRows={3} fullWidth size="small"
            sx={{
              '& .MuiInputLabel-root': { color: 'rgba(255,255,255,.7)' },
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255,255,255,.06)', borderRadius: 2,
                '& fieldset': { borderColor: 'rgba(255,255,255,.15)' },
              },
            }}
          />
          <TextField
            label="Số chương *" type="number" inputProps={{ min: 1 }}
            value={form.totalChapters} onChange={update('totalChapters')}
            required fullWidth size="small"
            sx={{
              '& .MuiInputLabel-root': { color: 'rgba(255,255,255,.7)' },
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255,255,255,.06)', borderRadius: 2,
                '& fieldset': { borderColor: 'rgba(255,255,255,.15)' },
              },
            }}
          />
          <TextField
            label="Ảnh bìa (URL)" value={form.image} onChange={update('image')}
            fullWidth size="small"
            sx={{
              '& .MuiInputLabel-root': { color: 'rgba(255,255,255,.7)' },
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255,255,255,.04)', borderRadius: 2,
                '& fieldset': { borderColor: 'rgba(255,255,255,.12)' },
              },
            }}
          />
          {form.image && (
            <Box sx={{ mt: .5, borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={form.image} alt="cover" style={{ width: '100%', maxHeight: 220, objectFit: 'cover' }} />
            </Box>
          )}
        </Stack>
      </DialogContent>

      <Divider sx={{ borderColor: 'rgba(255,255,255,.06)' }} />
      <DialogActions sx={{ px: 3, py: 1.5 }}>
        <Button onClick={onClose} sx={{ color: 'rgba(255,255,255,.85)' }}>Hủy</Button>
        <Button onClick={submit} variant="contained" disabled={!canSubmit}
          sx={{ px: 2.5, borderRadius: 2, textTransform: 'none', fontWeight: 700 }}>
          {mode === 'create' ? 'Lưu' : 'Cập nhật'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
