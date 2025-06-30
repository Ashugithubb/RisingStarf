'use client'
import React, { useState } from 'react';
import { Box, Paper, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

type QuestionsProps = {
  question: string;
  options: string[]; // [A, B, C, D]
};

export default function Questions({ question, options }: QuestionsProps) {
  const [selected, setSelected] = useState('');

  return (
    <Box m={2}>
      <Paper elevation={6} sx={{ padding: 2 }}>
        <FormControl>
          <FormLabel><Typography variant="body1">Q: 01 of  20 </Typography>{question}</FormLabel>
          <RadioGroup
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={`${String.fromCharCode(65 + index)}. ${option}`}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Paper>
    </Box>
  );
}
