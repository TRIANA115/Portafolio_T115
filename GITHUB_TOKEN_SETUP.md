# Configuración del Token de GitHub

Para mostrar repositorios privados en tu portafolio, necesitas configurar un token de acceso personal de GitHub.

## 📝 Pasos para crear el token:

1. **Ir a GitHub Settings**
   - Ve a https://github.com/settings/tokens
   - O navega: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Crear nuevo token**
   - Haz clic en "Generate new token" → "Generate new token (classic)"
   - Dale un nombre descriptivo como "Portfolio Access"
   - Selecciona una expiración (recomendado: 90 días o 1 año)

3. **Seleccionar permisos**
   - ✅ **repo** (Full control of private repositories)
     - Esto incluye: repo:status, repo_deployment, public_repo, repo:invite, security_events

4. **Generar y copiar**
   - Haz clic en "Generate token"
   - **¡IMPORTANTE!** Copia el token inmediatamente, no podrás verlo de nuevo

## 🔧 Configurar en tu proyecto:

1. **Editar .env.local**
   ```bash
   VITE_GITHUB_TOKEN=ghp_tu_token_aqui
   ```

2. **Reiniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

## 🔒 Seguridad:

- ✅ El archivo `.env.local` está en `.gitignore` y no se subirá al repositorio
- ✅ Los repos privados se muestran pero sin enlaces activos
- ✅ Solo tú puedes ver el contenido de los repos privados
- ⚠️ **NUNCA** compartas tu token de acceso personal

## 🎯 Resultado:

- **Repos públicos**: Se muestran con enlace activo a GitHub
- **Repos privados**: Se muestran con icono de candado y sin enlace
- **Indicador visual**: Los repos privados tienen una etiqueta "Privado" en rojo

## 🚨 Si no configuras el token:

- Solo se mostrarán los repositorios públicos
- No habrá errores, simplemente menos repositorios visibles