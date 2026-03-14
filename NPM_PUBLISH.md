# Publishing to npm

## One-Time Setup

### 1. Create npm Account (if you don't have one)

Go to https://www.npmjs.com/signup and create an account.

### 2. Login to npm CLI

```bash
npm login
```

Enter your:
- Username
- Password
- Email (public)
- One-time password (if 2FA is enabled)

### 3. Verify Login

```bash
npm whoami
```

Should show your npm username.

## Publishing

### 1. Test Locally First

```bash
cd /Users/ziggy/namecheap-mcp

# Test the package can be installed
npm pack

# This creates a .tgz file - you can test install it with:
# npm install -g ./namecheap-mcp-1.0.0.tgz
```

### 2. Publish to npm

```bash
cd /Users/ziggy/namecheap-mcp
npm publish
```

**Done!** The package is now live at:
- https://www.npmjs.com/package/namecheap-mcp
- Installable via: `npm install -g namecheap-mcp`

## Updating

When you make changes:

1. Update version in `package.json` (follow semver):
   - Patch: `1.0.1` - bug fixes
   - Minor: `1.1.0` - new features
   - Major: `2.0.0` - breaking changes

2. Commit changes:
   ```bash
   git add -A
   git commit -m "v1.0.1 - Fix XYZ"
   git tag v1.0.1
   git push && git push --tags
   ```

3. Publish:
   ```bash
   npm publish
   ```

## If Package Name Is Taken

If someone already owns `namecheap-mcp`, you can:

1. Use a scoped package: `@b1rdmania/namecheap-mcp` or `@ziggythebot/namecheap-mcp`
   - Update `package.json`: `"name": "@ziggythebot/namecheap-mcp"`
   - Install becomes: `npm install -g @ziggythebot/namecheap-mcp`
   - Usage stays the same in settings.json

2. Pick a different name: `domains-mcp`, `claude-domains`, `nc-mcp`, etc.

## Check It Worked

After publishing, wait 1-2 minutes then:

```bash
# Should install successfully
npm install -g namecheap-mcp

# Should run
npx namecheap-mcp
```
