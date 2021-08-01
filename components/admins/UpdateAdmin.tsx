import React, { SyntheticEvent, useState } from 'react'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'
import AccountsPermission from './permissions/AccountsPermissions'
import PostsPermission from './permissions/PostsPermissions'
import SettingsPermissions from './permissions/SettingsPermissions'
import UtilitiesPermissions from './permissions/UtilitiesPermissions'
import Button from '../buttons/Button'
import ErrorAlert from '../shared/ErrorAlert'
import SuccessAlert from '../shared/SuccessAlert'
import updateAdmin from '../../actions/account/update-admin'
import { toast } from 'react-toastify'
import { TagKey, TagKeyValuePair, TagValue } from '../shared/shared-styles'
import wordsCapitalizer from '../../utils/words-capitalizer'
import InputSelect from '../forms/InputSelect'

export default function UpdateAdmin({ admin, adminToUpdateName }) {
  const router = useRouter()
  const { mutateAsync, isLoading, isSuccess, isError, error } = useMutation(updateAdmin, {
    retry: false,
  })
  const [role, setRole] = useState('support')
  const [accounts, setAccounts] = useState(admin.permissions.accounts)
  const [posts, setPosts] = useState(admin.permissions.posts)
  const [settings, setSettings] = useState(admin.permissions.settings)
  const [utilities, setUtilities] = useState(admin.permissions.utilities)

  const handleSetAccounts = (name: string) => {
    setAccounts((prev) => ({ ...prev, [name]: !accounts[name] }))
  }

  const handleSetPosts = (name: string) => {
    setPosts((prev) => ({ ...prev, [name]: !posts[name] }))
  }

  const handleSetSettings = (name: string) => {
    setSettings((prev) => ({ ...prev, [name]: !settings[name] }))
  }

  const handleSetUtilities = (name: string) => {
    setUtilities((prev) => ({ ...prev, [name]: !utilities[name] }))
  }

  const handleUpdateAdmin = async (e: SyntheticEvent) => {
    e.preventDefault()
    const formData = {
      role: role,
      permissions: {
        accounts,
        posts,
        settings,
        utilities,
      },
    }
    await mutateAsync(
      { adminId: admin._id, formData },
      {
        onSuccess: (data) => {
          toast.success(
            `You have successfully updated ${wordsCapitalizer(adminToUpdateName)} admin account`
          )
          router.push(`/admins/${data}`)
        },
      }
    )
  }

  return (
    <>
      <TagKeyValuePair>
        <TagKey>Name:</TagKey>
        <TagValue>{adminToUpdateName}</TagValue>
      </TagKeyValuePair>
      <InputSelect
        title="Admin Role"
        label="role"
        name="role"
        value={role}
        isRequired
        options={['super', 'master', 'editor', 'support', 'marketer', 'developer']}
        onChange={(e) => setRole(e.target.value)}
      />
      <AccountsPermission handleSetAccounts={handleSetAccounts} accounts={accounts} />
      <PostsPermission handleSetPosts={handleSetPosts} posts={posts} />
      <SettingsPermissions handleSetSettings={handleSetSettings} settings={settings} />
      <UtilitiesPermissions handleSetUtilities={handleSetUtilities} utilities={utilities} />
      {isSuccess && (
        <SuccessAlert message="Admin successfully created, redirecting to created admin" />
      )}
      {isError && <ErrorAlert error={error} />}
      <Button
        block
        title="Update Admin"
        onClick={handleUpdateAdmin}
        loading={isLoading}
        align="center"
        disabled={isLoading || isSuccess}
        color="primary"
        size="medium"
        variant="filled"
      />
    </>
  )
}
