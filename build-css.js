const { spawn } = require('child_process');
const path = require('path');

const cwd = process.cwd();
console.log('Building Tailwind CSS with dark glassmorphism theme...');
console.log('');

const cmd = spawn('npx', ['tailwindcss', '-i', path.join(cwd, 'src/style.css'), '-o', path.join(cwd, 'css/style.css'), '--minify'], {
  stdio: 'inherit',
  cwd
});

cmd.on('close', (code) => {
  if (code === 0) {
    console.log('');
    console.log('✓ Build complete! CSS generated at css/style.css');
  } else {
    console.error('Build failed with exit code:', code);
    process.exit(1);
  }
});
