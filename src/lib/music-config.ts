/**
 * @fileOverview Configuration for the wedding invitation background music.
 * 
 * IMPORTANT: Web browsers cannot play files directly from your 'C:\' drive.
 * To fix this:
 * 1. Create a folder named 'public' at the root of your project.
 * 2. Move your MP3 file into that folder.
 * 3. Rename the file to 'music.mp3'.
 * 4. The path below should then be '/music.mp3'.
 */

export const MusicConfig = {
  // Relative path to the file in your 'public' folder
  audioPath: '/music.mp3', 
  volume: 0.4, // Play softly in the background (0.0 to 1.0)
};
